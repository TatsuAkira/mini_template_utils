<template>
  <div class="el_table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <div class="disflex justify-fe pt-10">
      <el-pagination
        :page-sizes="[10, 20, 30, 50]"
        layout=" prev, pager, next,sizes, total,jumper"
        :total="tableList.length || 0"
        :current-page="search.pageNum"
        :page-size="search.pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'el_table',
  data() {
    return {
      tableData: [],
      search: {
        pageNum: '',
        pageSize: '',
      },
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
    handleSizeChange(val) {
      this.search.pageSize = val
      //   this.handleGetTableData();
    },
    handleCurrentChange(val) {
      this.search.pageNum = val
      //   this.handleGetTableData();
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
  },
}
</script>

<style lang="scss" scoped></style>
