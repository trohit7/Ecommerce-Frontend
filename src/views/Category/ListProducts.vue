<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{category.categoryName}}</h4>
        <h5>{{msg}}</h5>
      </div>
    </div>

    <div class="row">
      <!-- <img v-show="len == 0" class="img-fluid" src="../../assets/sorry.jpg" alt="Sorry"> -->
      <div v-for="product of category.products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <ProductBox :product="product"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox';
export default {
  components:{ProductBox},
  // name: 'ListProducts',
  data(){
    return {
      id : null,
      categoryIndex : null,
      category : {},
      len : 0,
      msg : ''
    }
  },
  props : ["categories" ],
  mounted() {
    this.id = this.$route.params.id;
    this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
    this.category = this.categories[this.categoryIndex];

    this.len = this.category.products.length;
    if(this.len == 0) {
      this.msg = "Sorry, no products found";
    } else if(this.len == 1) {
      this.msg = "Only 1 product found";
    } else {
      this.msg = this.category.products.length + " products found";
    }
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

h5 {
  font-family: 'Roboto', sans-serif;
  color: #686868;
  font-weight: 300;
}
</style>
