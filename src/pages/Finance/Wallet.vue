<template>
    <div class="container-fluid">
        <div>
            <h3 class="headLine mx-3 bg-secondary p-3 rounded">المحفظة المالية :</h3>
        </div>
        <div class="container mt-3">
            <div class="card btn">
                <div class="icon">
                    <i class="fas fa-wallet"></i>
                </div>
                <div class="content">
                    <h2>رصيدك الحالي</h2>
                    <p>إجمالي العمليات</p>
                    <p><mark>500 ر.ي</mark> </p>
                </div>
            </div>
            <div class="card btn">
                <div class="icon">
                    <i class="fas fa-money-bill-wave"></i>
                </div>
                <div class="content">
                    <h2>الإيداع قيد المعالجة</h2>
                    <p> المبالغ التي تتم معالجتها</p>
                    <p><mark>1000 ر.ي</mark> </p>
                </div>
            </div>
            <div class="card btn">
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
            <!-- <div class="card-container">
            <div class="card">
              <div class="card-title" style="background-color: #fff;">آخر العمليات</div>
              <div class="card-body" style="background-color: lightgray;">
                <i class="fa fa-icon" style="font-size: 50px;"></i>
                <div style="font-size: 16px; color: #666; margin-top: 10px;">لا يوجد عمليات حتى الآن.</div>
              </div>
            </div>
        
            <div class="card">
              <div class="card-title" style="background-color: #fff;">كشف الحساب والإيداعات</div>
              <div class="card-body" style="background-color: lightgray;">
                <i class="fa fa-icon" style="font-size: 50px;"></i>
                <div style="font-size: 16px; color: #666; margin-top: 10px;">لا يوجد لديك إيداعات سابقة.</div>
              </div>
            </div>
        
            <div class="card">
              <div class="card-title" style="background-color: #fff;">شبكات الدفع المفعلة</div>
              <div class="card-body" style="background-color: lightgray;">
                <i class="fa fa-icon" style="font-size: 50px;"></i>
                <div style="font-size: 16px; color: #666; margin-top: 10px;">لا يوجد لديك أي شبكة مفعلة.</div>
              </div>
            </div>
          </div> -->

            <div class="card2 ">
                <div class="row">
                    <div class="col-6 ">
                        <div class="card-title headLine">آخر العمليات</div>

                    </div>
                    <div class="col-6">

                        <div class="card-title2"><button class="btn btn-imdad">قائمة العمليات</button></div>
                    </div>
                </div>


                <div class="card-body">
                    <i class="fa fa-icon" style="font-size: 50px;"></i>
                    <div style="font-size: 16px; color: #666; margin-top: 10px;"> <i class="bi bi-code-slash " style="font-size:50px"></i><br/>لا يوجد لديك اي عمليات سابقه سيتم إضافة كافه التفاصيل فور إتمام اول عمليه جديدة</div>
                </div>
            </div>
            <div class="card2 ">
                <div class="row">
                    <div class="col-6 ">
                        <div class="card-title headLine"> كشف الحساب والايداعات</div>

                    </div>
                    <div class="col-6">

                        <div class="card-title2"><button class="btn btn-imdad"> كشف حساب </button></div>
                    </div>
                </div>


                <div class="card-body">
                    <i class="fa fa-icon" style="font-size: 50px;"></i>
                    <div style="font-size: 16px; color: #666; margin-top: 10px;"> <br /><i
                        class="bi bi-cash" style="font-size: 50px;"></i><br/>لا يوجد لديك ايداعات سابقه سيتم إضافة كافه التفاصيل فور إتمام اول عمليه دفع</div>
                </div>
            </div>
            <div class="card2 ">
                <div class="row">
                    <div class="col-6 ">
                        <div class="card-title headLine"> شبكات الدفع المفعلة</div>

                    </div>
                    <div class="col-6">

                        <div class="card-title2"><button class="btn btn-imdad">قائمة الحسابات</button></div>
                    </div>
                </div>


                <div class="card-body">
                    <i class="fa fa-icon" style="font-size: 50px;"></i>
                    <div style="font-size: 16px; color: #666; margin-top: 10px;"> <br /><i
                        class="bi bi-wallet-fill    " style="font-size: 50px;"></i><br/>لا يوجد لديك اي شبكة دفع لاستقبال مدفوعاتك</div>
                </div>
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

.card2 {
    width: 100%;
    align-items: start;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    background-color: #fff;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card-title2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;

    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    
    
}

.card-body {
    background-color: lightgray;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    height: 400px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.card-title,
.card-body {
    box-sizing: border-box;
}

.card-title {
    background-color: #fff;
}

.card-title,
.card-body>* {
    margin: 0;
}

.card-body>i {
    color: #666;
}

.card-body>div {
    color: #666;
    margin-top: 10px;
    text-align: center;
}
</style>