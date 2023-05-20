<template>
    <div class="container-fluid">
    <div>
        <h3 class="headLine mx-3 bg-secondary p-3 rounded">المحفظة المالية :</h3>
    </div>
    <div class="container mt-3">
        <div class="card ">
            <div class="icon">
                <i class="fas fa-wallet"></i>
            </div>
            <div class="content">
                <h2>رصيدك الحالي</h2>
                <p>إجمالي العمليات</p>
                <p><mark>500 ر.ي</mark> </p>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <i class="fas fa-money-bill-wave"></i>
            </div>
            <div class="content">
                <h2>الإيداع قيد المعالجة</h2>
                <p> المبالغ التي تتم معالجتها</p>
                <p><mark>1000 ر.ي</mark> </p>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <i class="fas fa-history"></i>
            </div>
            <div class="content">
                <h2>آخر عملية إيداع</h2>
                <p> 19/5/2023</p>
                <p><mark>150 ر.ي</mark> </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-2 ">
            <!-- <canvas id="point" width="50" height="50"></canvas> -->
        </div>
        <div class="col-8 ">
            <canvas id="point" width="50" height="50"></canvas>
        </div>
        <div class="col-2 ">
            <!-- <canvas id="point" width="50" height="50"></canvas> -->
        </div>
    </div>
    <div class="row">
        <h3 class="headLine">>أخر العمليات</h3>
        <div class="table-responsive col-md-12 text-white text-bg-light">
            <table class="table   text-black"  >
                <thead>
                    <tr>
                        <!-- <th class="align-top"><input class="form-check-input" type="checkbox" value="" id="checkAll"></th> -->
                        <th><mark>رقم العملية</mark></th>
                        <th>  <mark>التاريخ والوقت </mark></th>
                        <th>  <mark> نوع العملية </mark></th>
                        <th>  <mark>رقم الطلب</mark></th>
                        <th>  <mark>اسم العميل</mark></th>
                        <th>  <mark>رقم الجوال</mark></th>
                        <th>  <mark>قيمة العمليه</mark></th>
                        <th>  <mark>شبكة الدفع </mark></th>
                        <th>  <mark>حالة العمليه</mark></th>

                        
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>545338</td>
                        <td><span>19/5/2023</span><span>12:00 AM</span> </td>
                        <td>شراء</td>
                        <td>#534354</td>
                        <td>عصام</td>
                        <td>01351323</td>
                        <td>50 ر.ي</td>
                        <td>VISA</td>
                        <td class="text-bg-success">ناجحة</td>
                    </tr>
                    <tr>
                        <td>545338</td>
                        <td><span>19/5/2023</span><span>12:00 AM</span> </td>
                        <td>شراء</td>
                        <td>#534354</td>
                        <td>احمد</td>
                        <td>01356351323</td>
                        <td>150 ر.ي</td>
                        <td>VISA</td>
                        <td class="text-bg-danger">فاشلة</td>
                        
                    </tr>
                 </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
import Chart from 'chart.js/auto';
const data = {
    labels: 'Dataset 1',
    datasets: [
        {
            label: 'مؤشر أداء',
            data: [150, 50, 100, 56, 98, 37, 45, 35, 89],
            borderColor: 'green',
            backgroundColor: 'blue',
            yAxisID: 'y',
        }
    ]
};
export default {
    name: "WalletPage",
    mounted() {
        console.log("chart start")
        const ctx = document.getElementById('point');
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: "مؤشر اداء"
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',

                        // grid line settings
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },

        });
    }
}
</script>
  
<style>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.card {
    width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.icon {
    font-size: 40px;
    margin-bottom: 20px;
}

.content {
    text-align: center;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    font-size: 18px;
    color: #666;
}
</style>