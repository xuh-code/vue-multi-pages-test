<template>
  <div id="app">
    <page-header :menu_value="menu"></page-header>

    <section id="page-header" class="page-title-wrap">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="page-title animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style="animation-duration: 0.6s; animation-delay: 0.6s;">
              <h2>产品中心</h2>
              <ul class="list-unstyled m-0 d-flex">
                <li><a href="/"><i class="fa fa-home"></i>主页</a></li>
                <li><a href="">产品中心</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="property-filter-section">
      <div class="auto-container">
        <!--MixitUp Galery-->
        <div class="mixitup-gallery">
          <div class="upper-box clearfix">
            <div class="sec-title">
              <span class="title">佳博产品,质量保证</span>
              <h2>产品类型</h2>
            </div>
            <!--Filter-->
            <div class="filters">
              <ul class="filter-tabs filter-btns clearfix">
                <li class="filter active" data-role="button">所有产品</li>
                <li class="filter" data-role="button">机电设备清洗剂</li>
                <li class="filter" data-role="button">脱漆脱塑清洗剂</li>
                <li class="filter" data-role="button">油污清洗剂</li>
                <li class="filter" data-role="button">除垢除锈清洗剂</li>
                <!-- <li class="filter" data-role="button" data-filter=".restaurent">Restaurent</li> -->
              </ul>
            </div>
          </div>
          <div class="filter-list row">
            <!-- Property Block -->
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Single House Near Orland Park.</a></h3>
                </div>
              </div>
            </div><!-- Property Block -->
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Apartment Morden 1243, W No...</a></h3>
                </div>
              </div>
            </div><!-- Property Block -->
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Great Home for Single fmaily</a></h3>
                </div>
              </div>
            </div><!-- Property Block -->
            
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Great Home for Single fmaily</a></h3>
                 </div>
              </div>
            </div>
            
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Great Home for Single fmaily</a></h3>
                 </div>
              </div>
            </div>
            <div class="property-block col-xs-6 col-md-4" style="display: inline-block;">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="@/assets/images/product/property-4.jpg" alt=""></figure>
                  <ul class="info clearfix">
                    <li><a href="properties.html"><i class="la la-calendar-minus-o"></i>2 Years Ago</a></li>
                  </ul>
                </div>
                <div class="lower-content">
                  <ul class="tags">
                    <li><a href="property-detail.html">Apartment</a>,</li>
                    <li><a href="property-detail.html">Bar</a>,</li>
                    <li><a href="property-detail.html">House</a>,</li>
                  </ul>
                  <h3><a href="property-detail.html">Great Home for Single fmaily</a></h3>
                 </div>
              </div>
            </div>
          </div><!-- Load More -->
          <div class="load-more-btn text-center"><a href="#" class="theme-btn btn-style-two">Load More</a></div>
        </div>
      </div>
    </section>

    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from '@/components/common/Header'
import pageFooter from '@/components/common/footer'

export default {
  data() {
    return {
      menu: 4
    }
  },
  components: {
    pageHeader,
    pageFooter
  }
}
</script>

<style>
</style>