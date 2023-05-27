<template>
    <div class="container-fluid">
      <div>
        <h3 class="headLine mx-3 bg-secondary p-3 rounded">المحفظة المالية :</h3>
      </div>
      <div class="row mt-3 justify-content-center">
        <div class="col-md-4 mb-3 ">
          <div class="card text-center rounded-0 border-0 "  >
            <router-link to="/currentbalance">
            <div class="card-body text-bg-light" style="flex-direction:column">
              <i class="fas fa-wallet fa-3x mb-3"></i>
              <h5 class="card-title">رصيدك الحالي</h5>
              <p class="card-text mb-0">إجمالي العمليات</p>
              <p class="card-text"><mark>500 ر.ي</mark></p>
            </div></router-link>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card text-center rounded-0 border-0">
            <div class="card-body text-bg-light " style="flex-direction:column">
              <i class="fas fa-money-bill-wave fa-3x mb-3"></i>
              <h5 class="card-title">الإيداع قيد المعالجة</h5>
              <p class="card-text mb-0"> المبالغ التي تتم معالجتها</p>
              <p class="card-text"><mark>1000 ر.ي</mark></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card text-center rounded-0 border-0">
            <div class="card-body text-bg-light" style="flex-direction:column">
              <i class="fas fa-history fa-3x mb-3"></i>
              <h5 class="card-title">آخر عملية إيداع</h5>
              <p class="card-text mb-0"> 19/5/2023</p>
              <p class="card-text"><mark>150 ر.ي</mark></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <div class="col-12 col-md-6 mb-3">
          <div class="cardtext-center rounded-0 border-0">
            <canvas id="point" width="50" height="50"></canvas>
          </div>
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <div class="col-md-4 mb-3">
          <div class="card2 text-center rounded-0">
            <div class="card-header">
              <h5 class="card-title mb-0">آخر العمليات</h5>
            </div>
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-code-slash fa-5x mb-3"></i>
              <p class="card-text mb-0">لا يوجد لديك اي عمليات سابقه سيتم إضافة كافه التفاصيل فور إتمام اول عمليه جديدة</p>
            </div>
            <div class="card-footer border-0">
              <router-link to="/lastoperation" class="btn btn-primary">قائمة العمليات</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card2 text-center rounded-0">
            <div class="card-header">
              <h5 class="card-title mb-0"> كشف الحساب والايداعات</h5>
            </div>
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-cash fa-5x mb-3"></i>
              <p class="card-text mb-0">لا يوجد لديك ايداعات سابقه سيتم إضافة كافه التفاصيل فور إتمام اول عمليه دفع</p>
            </div>
            <div class="card-footer border-0">
              <router-link to="/depositoperations" class="btn btn-primary"> كشف حساب</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card2 text-center rounded-0">
            <div class="card-header">
              <h5 class="card-title mb-0"> شبكات الدفع المفعلة</h5>
            </div>
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-wallet-fill fa-5x mb-3"></i>
              <p class="card-text mb-0">لا يوجد لديك اي شبكة دفع لاستقبال مدفوعاتك</p>
            </div>
            <div class="card-footer border-0">
              <button class="btn btn-primary">قائمة الحسابات</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .headLine {
    color: #fff;
  }
  
  .card2 {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .card2 .card-title {
    font-weight: bold;
    background-color: #fff;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .card2 .card-footer {
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  .card2 .card-text {
    color: #666;
    margin-top: 10px;
    text-align: center;
  }
  </style>
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