<template>
    <div>
      <TabScrollContainer :tabs="['Section 1', 'Section 2', 'Section 3']">
        <template v-slot:section-0>
          <div>
            <h2>Section 1 Content</h2>
            <p>This is the content for section 1.</p>
          </div>
        </template>
        <template v-slot:section-1>
          <div>
            <h2>Section 2 Content</h2>
            <div v-if="isShow2" class="box"></div>
          </div>
        </template>
        <template v-slot:section-2>
          <div>
            <h2>Section 3 Content</h2>
            <div v-if="isShow">
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            <p>This is the content for section 3.</p>
            </div>
          </div>
        </template>
      </TabScrollContainer>
    </div>
  </template>
  
  <script>
  import TabScrollContainer from './Container.vue';
  
  export default {
    data() {
        return {
            isShow: false,
            isShow2: false
        }
    },
    mounted() {
      setTimeout(()=>{
        this.isShow = true
        this.isShow2 = true
      },1000)
    },
    components: {
      TabScrollContainer,
    },
  };
  </script>
  <style>
    .box{
        height: 500px;
        background-color: orange;
    }
</style>