<template>
  <el-dialog
    :visible.sync="visible"
    :append-to-body="true"
    :before-close="handleClose"
    destroy-on-close
    :close-on-click-modal="false"
    width="90%"
  >
    <div slot="title">
      <span class="f15" style="color: #606266">研究需要的数据区域</span>
      <span class="f12" style="margin-left: 10px; color: #ccc">请勾选区域</span>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleClose">关 闭</el-button>
      <el-button
        size="small"
        :loading="loading"
        @click="submitForm('ruleForm')"
        type="primary"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
// import { xxx } from '@/api/xxx'  // 导入接口
export default {
  name: '',
  props: ['visible'],
  data() {
    return {}
  },
  watch: {},
  components: {},
  filters: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scpoed></style>
