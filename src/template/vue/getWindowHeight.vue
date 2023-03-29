<template>
  <div class="获取浏览器高度">获取浏览器高度</div>
</template>

<script>
export default {
  name: '获取浏览器高度',
  data() {
    return {
      tHeight: 500,
    }
  },
  watch: {
    // 监测变化
  },
  created() {
    // 实例被创建之后执行代码
  },
  methods: {
    // 方法
    setTableHeight() {
      this.tHeight = window.innerHeight - 225 //数值350根据不同页面高度自己设置
    },
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  mounted() {
    // 页面进入时加载内容
    //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    this.$nextTick(() => {
      this.setTableHeight()
    })
    // 页面创建完成后添加监听
    window.addEventListener('resize', this.setTableHeight)
  },
}
</script>

<style lang="scss" scoped></style>
