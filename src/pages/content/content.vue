<template>
  <div id="app">
    <page-header :menu_value="menu"></page-header>

    <section id="page-header" class="page-title-wrap">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="page-title animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style="animation-duration: 0.6s; animation-delay: 0.6s;">
              <h2>联系我们</h2>
              <ul class="list-unstyled m-0 d-flex">
                <li><a href="/"><i class="fa fa-home"></i>主页</a></li>
                <li><a href="">联系我们</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section>
      <div id="baidu-map"></div>
    </section> -->

    <section id="content-map">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <!-- Map -->
            <div id="baidu-map" class="map animated fadeInUp" data-animate="fadeInUp" data-delay=".1" data-trigger="map" data-map-options="{&quot;latitude&quot;: &quot;37.386052&quot;, &quot;longitude&quot;: &quot;-122.083851&quot;, &quot;zoom&quot;: &quot;15&quot;, &quot;api_key&quot;: &quot;AIzaSyCjkssBA3hMeFtClgslO2clWFR6bRraGz0&quot;}" style="animation-duration: 0.6s; animation-delay: 0.1s; min-height: 410px; position: relative; overflow: hidden;"></div>
          </div>
          <div class="col-lg-4">
            <!-- Map description -->
            <div class="map-description light-bg d-flex align-items-center animated fadeInUp" data-animate="fadeInUp" data-delay=".4" style="animation-duration: 0.6s; animation-delay: 0.4s;">
              <p>" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum cupiditate non provident, lique sunt in culpa qui officia eserunt mollitia animi, id est laborum noakhalir lok fuga "</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="page-contacts-widget-wrapper light-bg d-flex align-items-center animated fadeInUp" data-animate="fadeInUp" data-delay=".1" style="animation-duration: 0.6s; animation-delay: 0.1s;">
              <!-- Contact Info -->
              <div class="page-contacts-widget">
                <h3 class="h4">联系我们</h3>
                <div class="contact-widget-content">
                  <p>Sed ut perspiciatis unde omnis natus vitae dicta sunt explicabo.</p>
                  <ul class="list-unstyled">
                    <li><i class="fa fa-phone"></i><a href="tel:+8617606543581">(+86)17606543581</a></li>
                    <li><i class="fa fa-envelope-o"></i><a href="mailto:customer@jiabo.com">serviney.demo@fakemail.com</a></li>
                    <li><i class="fa fa-map-marker"></i><span>浙江省</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <!-- Contact Form -->
            <div class="contact-form parsley-validate-wrap mt-60 animated fadeInUp" data-animate="fadeInUp" data-delay=".4" style="animation-duration: 0.6s; animation-delay: 0.4s;">
              <h3 class="bordered-title">取得联系</h3>
              <div class="form-response"></div>
              <form method="post" action="#" novalidate="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-field"><input type="text" name="name" class="theme-input-style" placeholder="Your Name" required=""></div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-field"><input type="email" name="email" class="theme-input-style" placeholder="E-mail address" required=""></div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-field"><input type="text" name="phone" class="theme-input-style" placeholder="Telephone" data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$"></div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-field"><input type="text" name="subject" class="theme-input-style" placeholder="Subject"></div>
                  </div>
                </div>
                <div class="form-field">
                  <textarea name="message" class="theme-input-style" placeholder="Write your message" required=""></textarea>
                </div>
                <button type="submit" class="btn btn-info">Send Message</button>
              </form>
            </div><!-- End of Contact Form -->
          </div>
        </div>
      </div>
    </section>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from '@/components/common/Header'
import pageFooter from '@/components/common/footer'

var map = new BMap.Map('baidu-map')
export default {
  data() {
    return {
      menu: 6,
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  components: {
    pageHeader,
    pageFooter
  },
  mounted: function() {
    this.getBaiduMap()
  },
  methods: {
    getBaiduMap: function() {
      // 百度地图API功能
      var map = new BMap.Map('baidu-map') // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      )
      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
    }
  }
}
</script>

<style>
#baidu-map {
  width: 100%;
  height: 400px;
}
</style>