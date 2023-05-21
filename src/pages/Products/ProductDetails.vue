


<template>
  <div id="app" class="container">
    <div class="row mt-3">
      <div class="col text-right">
        <h1>شوفان</h1>
      </div>
      <div class="col text-left">
        <button class="btn btn-primary">عودة</button>
      </div>
    </div>

    <div class="container">
      <ul class="nav nav-tabs mt-3">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#tab1">تقييمات المنتج</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tab2">احجام ونكهات المنتج</a>
        </li>

      </ul>

      <div class="tab-content mt-3">
        <div class="tab-pane fade show active" id="tab1">
          <div class="row">
            <div class="col-6">
              <div class="card-header">
                  <div class="">
                    
                    <div>
                      
                      <button class="btn btn-primary rounded-circle">حفظ </button>
                    </div>
                  </div>
                </div>
              <div class="card bg-light" style="border-radius: 10px;">
                <div class="card mb-3" style="max-width: 540px;">
                  <div class=" d-flex g-0 bg-light product-card">
                    <div class=" ">
                      <img style="width: 7vw;"
                        src="https://images-na.ssl-images-amazon.com/images/I/51yAvuHPdML._SL500_._AC_SL500_.jpg"
                        class="img-fluid rounded-start" alt="Product Image">
                    </div>
                    <div class="">
                      <div class="card-body text-right">
                        <h5 class="card-title ">شوفان ابيض</h5>
                        <p class="card-text"> 123456</p>
                        <p class="card-text"> 10</p><br>
                        <div class="price-input">
                          <div class="row">
                            
                            <div class="col">
                              <input type="text" class="form-control bg-light" placeholder="5000">
                            </div>
                            <div class="col-auto">
                              <p class="card-text">ريال</p>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>



                  </div>
                  <div class="availability-switch bg-light">
                          <div class="row mt-3">
                            <div class="col text-end">
                              <p class="card-text">هل ترغب باظهار هذا المنتج بالتطبيق؟ هل هو متوفر؟</p>
                            </div>
                            <div class="col text-start">
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="switchBox">
                              </div>
                            </div>
                          </div>
                        </div>
                </div>

              </div>
            </div>
            <div class="col-6">
              <div class="card bg-light" style="border-radius: 10px;">
                <div class="card-body">
                  <canvas id="myChart" width="20" height="20"></canvas>

                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-light" style="border-radius: 10px;">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title font-weight-bold">تغيير السعر حسب الكمية</h5>
                    <div>
                      <button class="btn btn-danger me-2">حذف الاسعار</button>
                      <button class="btn btn-success">حفظ الاسعار</button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col">
                      <input type="text" class="form-control bg-light" placeholder="الكمية من">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control bg-light" placeholder="الكمية الى">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control bg-light" placeholder="سعر البيع">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button class="btn btn-success btn-block">اضافة كمية</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-light " style="border-radius: 10px;">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h5 class="card-title">سعر السوق</h5>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="card-text">اقل سعر</p>
                      <p class="card-text">9.000 ريال</p>
                    </div>
                    <div>
                      <p class="card-text">متوسط سعر</p>
                      <p class="card-text">17.400 ريال</p>
                    </div>
                    <div>
                      <p class="card-text">اعلى سعر</p>
                      <p class="card-text">40.000 ريال</p>
                    </div>
                  </div>

                  <div class="progress mt-3">
                    <div class="progress-bar"
                      style="background: linear-gradient(to right, #00ff00 0%, #0000ff 50%, #ff0000 100%); width: 100%;">
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <hr>
            



          </div>
        </div>
        <div class="tab-pane fade" id="tab2">
          <!-- Content for Tab 2 -->
          <h2>احجام ونكهات المنتج</h2>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "ProductDetailsPage",
  mounted() {
        console.log("chart start")
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar','Apr','May'],
                datasets: [{
                    label: 'عرض الطلبات',
                    data: [11, 8, 3, 5, 2, 3,2,7],
                    borderWidth: 1,
                    backgroundColor: ['darkblue'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
};

</script>

<style>
.product-card {
  direction: rtl;
  padding: 10px;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
}

.price-input {
  margin-top: 10px;
}

.price-symbol {
  font-size: 18px;
  font-weight: bold;
}

.availability-text {
  font-size: 16px;
}</style>

