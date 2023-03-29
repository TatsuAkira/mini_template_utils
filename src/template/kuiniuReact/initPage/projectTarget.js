import React, { useState, useEffect, useCallback } from 'react'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './actions.js'
import { Spin } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { t, Trans } from '@lingui/macro'

const PagesWorkPlanProjectTarget = (props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if ( !props.globalData.EDRShowProjectSelect) {
        props.setShowProjectSelect(true)
    }
    return () => {}
  }, [props])

  return <Spin spinning={loading} tip={t`正在加载数据，请稍候...`}></Spin>
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesWorkPlanProjectTarget)
// export default PagesWorkPlanProjectTarget
