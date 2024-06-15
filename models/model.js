import query from "../database/query.js";
import validator from "../validators/validator.js";

class Model {
    constructor(table,schema) {
        this.table = table;
        this.schema = schema;
    }

    async findMany(options) {
        if (typeof options !== "object") throw new Error("invalid option given in the query.");

        let fields = "*";
        let include = "";

        if (options.include) {
            // FOR NOW: only allowed one relationship
            const relations = Object.keys(options.include);

            for (let relation of relations) {
                if (options.include[relation])
                    include += `INNER JOIN ${relation} ON ${this.table}.${relation}Id = ${relation}.id `;
            }    

            if (options.where) {
                const whereClauses = Object.keys(options.where);

                for (let clause of whereClauses) {
                    options.where[`${this.table}.${clause}`] = options.where[clause];
                    delete options.where[clause];
                }
            }

            const tableFields = Object.keys(this.schema);
            fields = tableFields.map(field => `${this.table}.${field} AS ${this.table}_${field}`).join(",");
            fields = `${relations[0]}.*,` + fields;
        }

        // in operator for getting multiple datas that have the same field value;
        // currently only accept one operator which is 'in'.
        let inOperator;
        if (options.where) {
            const whereClauses = Object.keys(options.where);
            const firstClause = whereClauses[0];
            const firstClauseValue = options.where[whereClauses[0]];
            if (typeof firstClauseValue == "object") {
                const operators = Object.keys(firstClauseValue);
                if (operators.includes("$in") && Array.isArray(firstClauseValue["$in"])) {
                    inOperator = `${firstClause} IN (${firstClauseValue["$in"]})`;
                }
                
                const sql = `SELECT ${fields} FROM ${this.table} ${include} WHERE ${inOperator}`;
                const result = await query(sql);
                return result;
            }
        }

        const sql = `SELECT ${fields} FROM ${this.table} ${include} WHERE ?`;
        const whereClause = options.where;
        const result = await query(sql, whereClause ? whereClause: "1=1");

        return result;
    }

    async findOne(options) {
        if (typeof options !== "object") throw new Error("invalid option given in the query.");
        
        let include = "";
        if (options.include) {
            const relations = Object.keys(options.include);

            for (let relation of relations) {
                if (options.include[relation])
                    include += `LEFT OUTER JOIN ${relation} ON ${this.table}.${relation}Id = ${relation}.id `;
            }    

            if (options.where) {
                const whereClauses = Object.keys(options.where);

                for (let clause of whereClauses) {
                    options.where[`${this.table}.${clause}`] = options.where[clause];
                    delete options.where[clause];
                }
            }
        }

        const sql = `SELECT * FROM ${this.table} ${include} WHERE ?`;
        const result = await query(sql, options.where);

        return result[0];
    }

    async update(options) {
        const sql = `UPDATE ${this.table} SET ? WHERE ?`;
        const result = await query(sql,[options.data,options.where]);

        return result;
    }

    async upsert(options) {
        const data = await this.findOne({
            where: options.where
        });

        if (data) {
            await this.update({
                data: {
                    ...options.update,
                    updatedAt: Date.now()
                },
                where: options.where
            })
            return;
        } 

        const created = await this.create(options.create);

        return created.id;
    }

    async delete(options) {
        if (typeof options !== "object") throw new Error("invalid option given in the query.");

        const sql = `DELETE FROM ${this.table} WHERE ?`;
        const result = await query(sql,options.where);
    }

    async create(data) {
        const sql = `INSERT INTO ${this.table} SET ?`;

        const validate = validator(this.schema,data);

        if (!validate.isSuccess) throw new Error(validate.message);

        const result = await query(sql,data);

        return result.insertId;
    }
}

export default Model;