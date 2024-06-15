function init() {  
    const empPerDep = global.employeesPerDepartment;
    const empDepartments = Object.keys(empPerDep);

    // BAR CHART DATA 
    const barChartData = {
        labels: empDepartments,
        datasets: [{
            label: '# of Employee per Department',
            data: empDepartments.map(department => empPerDep[department].length),
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    Chart.defaults.color = "#fff";

    // RENDER BAR CHART
    const barGraph = new Chart(
        document.getElementById('bar-graph'),
        config
    );

    const projPerDep = global.projectsPerDepartment;
    const projDepartments = Object.keys(projPerDep);
  

    // DOUGHNUT CHART DATA 
    const doughnutChartData = {
        labels: projDepartments,
        datasets: [{
            label: '# of Projects',
            data: projDepartments.map(department => projPerDep[department].length),
            borderWidth: 1
        }]
    };

    const config1 = {
        type: 'doughnut',  
        data: doughnutChartData,  
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // RENDER DOUGHNUT CHART
    const doughnutGraph = new Chart(
        document.getElementById('doughnut'),  
        config1
    );
};