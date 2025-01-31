<template>
    <div class="tab-scroll-container">
      <!-- Tab 栏 -->
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="scrollToSection(index)"
          :class="{ active: activeTab === index }"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- 内容区域 -->
      <div class="sections" @scroll="handleScroll">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :ref="`section-${index}`"
          class="section"
        >
          <slot :name="`section-${index}`"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeTab: 0, // 当前激活的 Tab
        sectionOffsets: [], // 存储每个 Section 的顶部偏移量
        lock: false
      };
    },
    mounted() {
      // 组件挂载后，计算每个 Section 的顶部偏移量
      this.calculateSectionOffsets();
      // 监听窗口大小变化，重新计算偏移量
      window.addEventListener('resize', this.calculateSectionOffsets);
    },
    beforeDestroy() {
      // 组件销毁前，移除事件监听
      window.removeEventListener('resize', this.calculateSectionOffsets);
    },
    methods: {
      // 计算每个 Section 的顶部偏移量
      calculateSectionOffsets() {
        this.sectionOffsets = this.tabs.map((_, index) => {
          const section = this.$refs[`section-${index}`][0];
          return section.offsetTop;
        });
      },
      // 点击 Tab 时滚动到对应的 Section
      scrollToSection(index) {
        this.lock = true
        this.activeTab = index;
        const section = this.$refs[`section-${index}`][0];
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(()=>{
            this.lock = false
        },1000)
      },
      // 处理滚动事件，动态更新激活的 Tab
      handleScroll(event) {
        // if(this.lock)return
        // const scrollTop = event.target.scrollTop;
        // console.log('[p1.1]',{scrollTop})
        // // 找到当前显示的 Section
        // for (let i = this.sectionOffsets.length - 1; i >= 0; i--) {
        //   if (scrollTop >= this.sectionOffsets[i] - 50) { // 50 是容错值
        //     this.activeTab = i + 1;
        //     break;
        //   }
        // }
      },
    },
  };
  </script>
  
  <style scoped>
  .tab-scroll-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    padding: 10px;
    position: sticky;
    top: 0; /* 固定在容器顶部 */
    z-index: 1; /* 确保 Tab 栏在内容上方 */
  }
  
  .tabs button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
  }
  
  .tabs button.active {
    border-bottom: 2px solid #42b983;
    color: #42b983;
  }
  
  .sections {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    height: 100vh;
  }
  
  .section {
    margin-bottom: 20px;
  }
  </style>