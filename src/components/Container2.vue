<template>
    <div class="scroll-tabs-container">
        <div>tabs1</div>
      <div class="tabs">
        <div
          v-for="(tab, index) in sections"
          :key="index"
          :class="['tab', { active: activeTab === index }]"
          @click="scrollToSection(index)"
        >
          {{ tab.name }}
        </div>
      </div>
      
      <div class="sections" ref="sectionsContainer" @scroll="onScroll">
        <div
          v-for="(tab, index) in sections"
          :key="index"
          :ref="`section${index}`"
          class="section"
          :style="{ height: tab.height + 'px' }"
        >
          <slot :name="'section' + index">{{ tab.content }}</slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ScrollTabs",
    data() {
      return {
        activeTab: 0,
        sections: [],
      };
    },
    mounted() {
      this.sections = this.$slots.default.map((_, index) => ({
        name: `Tab ${index + 1}`,
        height: 0,
        content: `Section ${index + 1} content`,
      }));
    },
    methods: {
      scrollToSection(index) {
        const section = this.$refs[`section${index}`][0];
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          this.activeTab = index;
        }
      },
      onScroll() {
    //     const container = this.$refs.sectionsContainer;
    //     const sectionHeights = Array.from(container.children).map((section) =>{
    //     console.log('[p1.1] 1', section.getBoundingClientRect().top + container.scrollTop)
    //       return section.getBoundingClientRect().top + container.scrollTop
          
    //   });
    //     const currentScrollPosition = container.scrollTop + container.offsetTop;
  
    //     this.activeTab = sectionHeights.findIndex((top) => top > currentScrollPosition)+1;
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-tabs-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .tabs {
    display: flex;
    border-bottom: 2px solid #ddd;
    background-color: #f5f5f5;
  }
  
  .tab {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .tab.active {
    background-color: #007bff;
    color: white;
  }
  
  .sections {
    overflow-y: auto;
    height: 300px;
    margin-top: 10px;
  }
  
  .section {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  </style>
  