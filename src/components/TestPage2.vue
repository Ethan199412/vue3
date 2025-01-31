<template>
    <div>
      <h1>带 Tab 的滚动容器</h1>
      <scroll-tabs :sections="sections">
        <!-- 自定义 Section 1 内容 -->
        <template v-slot:section0>
          <div>
            <h2>自定义 Section 1 内容</h2>
            <p>这是第一个 Section 的内容。</p>
            <p>更多内容...</p>
          </div>
        </template>
  
        <!-- 自定义 Section 2 内容 -->
        <template v-slot:section1>
          <div>
            <h2>自定义 Section 2 内容</h2>
            <p>这是第二个 Section 的内容。</p>
            <p>更多内容...</p>
          </div>
        </template>
  
        <!-- 自定义 Section 3 内容 -->
        <template v-slot:section2>
          <div>
            <h2>自定义 Section 3 内容</h2>
            <p>这是第三个 Section 的内容。</p>
            <p>更多内容...</p>
          </div>
        </template>
      </scroll-tabs>
    </div>
  </template>
  
  <script>
  import ScrollTabs from './Container2.vue'; // 导入我们定义的 ScrollTabs 组件
  
  export default {
    name: "ParentComponent",
    components: {
      ScrollTabs,
    },
    data() {
      return {
        // 传递给 ScrollTabs 组件的 sections 数据
        sections: [
          { name: "Tab 1", height: 500, content: "Section 1 默认内容" },
          { name: "Tab 2", height: 400, content: "Section 2 默认内容" },
          { name: "Tab 3", height: 600, content: "Section 3 默认内容" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  