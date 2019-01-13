<template>
  <div id="app">
    <page-header :menu_value="menu"></page-header>

    <section id="page-header" class="page-title-wrap">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="page-title animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style="animation-duration: 0.6s; animation-delay: 0.6s;">
              <h2>走进佳博</h2>
              <ul class="list-unstyled m-0 d-flex">
                <li><a href="/"><i class="fa fa-home"></i>主页</a></li>
                <li><a href="">关于我们</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-us" class="sidebar-page-container">
      <div class="auto-container">
        
        <hr>
        <div class="row clearfix">

          <!--Sidebar Side-->
          <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar default-sidebar">
              <div class="sidebar-widget categories">
                <div class="sidebar-title">
                  <h2>走进佳博</h2>
                </div>
                <ul class="cat-list">
                  <li><a href="#" class="active">公司简介</a></li>
                  <li><a href="#">资质荣誉 </a></li>
                  <li><a href="#">企业文化</a></li>
                  <li><a href="#">园区风貌 </a></li>
                </ul>
              </div>
            </aside>
          </div>

          <!--Content Side-->
          <div class="content-side col-lg-8 col-md-12 col-sm-12">
            <div class="blog-detail">
              <!-- News Block -->
              <div class="news-block-three">
                <div class="inner-box">
                  <div class="lower-content">
                    <h4>Colgate-Palmolive Renews with Morz in Malaysia Soon</h4>
                    <p>Manufacturers create physical goods. How these goods are created varies depending on the specific company and industry. However, most manufacturers use machinery and industrial equipment to produce goods for public consumption. The manufacturing process creates value, meaning companies can charge a premium for what they create. For example, rubber is not particularly valuable on its own. But when it is formed into a car tire, it holds substantially more value.</p>
                    <h5>Beverage and tobacco product manufacturing:</h5>
                    <p>Interestingly, tobacco and beverages are in the same sector of manufacturing. Beverage products include those that are non-alcoholic, as well as those that are alcoholic through the fermentation or distillation process. Ice is also considered a manufactured beverage. Tobacco products are loose tobacco products, as well as those that are in cigarette or cigar form.</p>
                    <p>Today’s advancement of computer technology allows manufacturers to do more with less time. Now, thousands of items can be manufactured within the space of minutes. Computer technology can be used to assemble, test and track production. Each year, technology continues to make manufacturing increasingly efficient, faster and more cost-effective. However, automation also eliminates many manufacturing jobs, leaving skilled employees without work.</p>
                  </div>
                </div>
              </div><!-- Other Options -->
            </div>
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

export default {
  data() {
    return {
      menu: 2
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