import React from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => { 
    const salesProfitOptions = {
        chart: {
            foreColor: "#111c2d99",
            fontFamily: "inherit",
            toolbar: { show: false },
        },
        colors: ["var(--bs-primary)", "var(--bs-secondary-color)"],
        dataLabels: { enabled: false },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.1,
                opacityTo: 0,
                stops: [100],
            },
        },
        grid: {
            show: true, 
            strokeDashArray: 3,
            borderColor: "#90A4AE50",
        },
        stroke: { curve: "smooth", width: 2 },
        xaxis: {
            categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { tickAmount: 3 },
        legend: { show: false },
        tooltip: { theme: "dark" },
    };

    const salesProfitSeries = [
        {
            type: "area",
            name: "This Year",
            data: [25, 25, 10, 10, 45, 45, 75, 70, 35],
        },
        {
            type: "line",
            name: "Last Year",
            data: [50, 50, 25, 20, 20, 20, 35, 35, 60],
        },
    ];
 
    const totalFollowersOptions = {
        chart: {
            fontFamily: "inherit",
            type: "bar",
            height: 90,
            stacked: true,
            toolbar: { show: false },
            sparkline: { enabled: true },
        },
        grid: { show: false },
        colors: ["var(--bs-danger)", "rgba(17, 28, 45, 0.10)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "30%",
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "all",
                borderRadius: 3,
            },
        },
        dataLabels: { enabled: false },
        tooltip: { theme: "dark" },
        legend: { show: false },
    };

    const totalFollowersSeries = [
        { name: "", data: [29, 52, 38, 47, 56] },
        { name: "", data: [71, 71, 71, 71, 71] },
    ];
 
    const totalIncomeOptions = {
        chart: {
            id: "total-income",
            type: "area",
            height: 70,
            sparkline: { enabled: true },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        stroke: { curve: "smooth", width: 2 },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180],
            },
        },
        markers: { size: 0 },
        tooltip: {
            theme: "dark",
            fixed: { enabled: true, position: "right" },
            x: { show: false },
        },
        colors: ["var(--bs-secondary)"],
    };

    const totalIncomeSeries = [
        { name: "monthly earnings", data: [25, 66, 20, 40, 12, 58, 20] },
    ];

    return (
        <div className="row">
            {/* Row 1 */}
            <div className="col-lg-8 d-flex align-items-strech">
                <div className="card w-100">
                    <div className="card-body">
                        <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                            <div className="mb-3 mb-sm-0">
                                <h5 className="card-title fw-semibold">Stock Movement</h5>
                            </div>
                            <div>
                                <select className="form-select">
                                    <option value="1">January 2026</option>
                                    <option value="2">February 2026</option>
                                    <option value="3">March 2026</option>
                                    <option value="4">April 2026</option>
                                </select>
                            </div>
                        </div>
                        <Chart options={salesProfitOptions} series={salesProfitSeries} type="line" height={300} />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card bg-danger-subtle shadow-none w-100">
                            <div className="card-body">
                                <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-6">
                                        <div className="rounded-circle-shape bg-danger px-3 py-2 rounded-pill d-inline-flex align-items-center justify-content-center">
                                            <iconify-icon icon="solar:box-line-duotone" className="fs-7 text-white"></iconify-icon>
                                        </div>
                                        <h6 className="mb-0 fs-4 fw-medium text-muted">Total Products</h6>
                                    </div> 
                                </div>
                                <div className="row align-items-end justify-content-between">
                                    <div className="col-5">
                                        <h2 className="mb-6 fs-8">5</h2> 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card bg-secondary-subtle shadow-none w-100">
                            <div className="card-body">
                                <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-6">
                                        <div className="rounded-circle-shape bg-secondary px-3 py-2 rounded-pill d-inline-flex align-items-center justify-content-center">
                                            <iconify-icon icon="solar:wallet-2-line-duotone" className="fs-7 text-white"></iconify-icon>
                                        </div>
                                        <h6 className="mb-0 fs-4 fw-medium text-muted">Total Stock Value</h6>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-between pt-4">
                                    <div className="col-5">
                                        <h2 className="mb-6 fs-8 text-nowrap">500000 RWF</h2>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="row">
                <div className="col-lg-8 d-flex align-items-stretch">
                    <div className="card w-100 overflow-hidden">
                        <div className="card-body pb-0">
                            <h4 className="fs-4 mb-1 card-title">Stock Overview</h4>
                            <p className="mb-0 card-subtitle">Recent Stock Activities</p>
                        </div>
                        <div className="table-responsive products-tabel">
                            <table className="table text-nowrap mb-0 align-middle table-hover">
                                <thead className="fs-4">
                                    <tr>
                                        <th className="fs-3 px-4">Products</th>
                                        <th className="fs-3">Quantity</th>
                                        <th className="fs-3">Stock Status</th>
                                        <th className="fs-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center product">
                                                <div className="bg-primary-subtle rounded p-2 me-2">
                                                    <iconify-icon icon="solar:box-line-duotone" className="fs-4 text-primary"></iconify-icon>
                                                </div>
                                                <div className="ms-3 product-title">
                                                    <h6 className="fs-3 mb-0 text-truncate-2">Macbook</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 className="mb-0 fs-4">150 <span className="text-muted">units</span></h5> 
                                        </td>
                                        <td><span className="badge rounded-pill fs-2 fw-medium bg-success-subtle text-success">In Stock</span></td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center product">
                                                <div className="bg-primary-subtle rounded p-2 me-2">
                                                    <iconify-icon icon="solar:box-line-duotone" className="fs-4 text-primary"></iconify-icon>
                                                </div>
                                                <div className="ms-3 product-title">
                                                    <h6 className="fs-3 mb-0 text-truncate-2">Hp</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 className="mb-0 fs-4">200 <span className="text-muted">units</span></h5> 
                                            <div className="progress bg-light w-100" style={{ height: "4px" }}>
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                        <td><span className="badge rounded-pill fs-2 fw-medium bg-danger-subtle text-danger">Out of Stock</span></td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="card-body">
                            <h4 className="mb-3 card-title">Eproduct Statistics</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle-shape bg-primary-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                                            <iconify-icon icon="solar:card-line-duotone" className="fs-7 text-primary"></iconify-icon>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-3">Total Imports</h6>
                                            <p className="mb-0 fs-2 d-flex align-items-center gap-1">This month</p>
                                        </div>
                                    </div>
                                    <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end"><i className="ti ti-caret-up"></i>245</span>
                                </li> 
                                <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle-shape bg-primary-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                                            <iconify-icon icon="solar:card-line-duotone" className="fs-7 text-primary"></iconify-icon>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-3">Total Export</h6>
                                            <p className="mb-0 fs-2 d-flex align-items-center gap-1">This month</p>
                                        </div>
                                    </div>
                                    <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-danger-subtle text-danger text-end"><i className="ti ti-caret-down"></i>200</span>
                                </li> 
                                <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle-shape bg-primary-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                                            <iconify-icon icon="solar:card-line-duotone" className="fs-7 text-primary"></iconify-icon>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-3">System User</h6>
                                            <p className="mb-0 fs-2 d-flex align-items-center gap-1">This month</p>
                                        </div>
                                    </div>
                                    <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-warning-subtle text-warning text-end"><i className="ti ti-users"></i>3</span>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
