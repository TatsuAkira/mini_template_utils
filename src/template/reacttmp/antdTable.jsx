import React from 'react'

export const antdTable = () => {
  const columns = [
    {
      title: '姓名缩写',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '患者ID',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: data.column_cn_name,
      dataIndex: 'tags',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type='link'>xxx</Button>
          <Button type='link'>xxx</Button>
        </Space>
      ),
    },
  ]

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  const tablePaginationChange = (page, pageSize) => {
    setSearch({
      page,
      pageSize,
    })
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          size: 'small',
          total: 100,
          current: search.pageNum,
          pageSize: search.pageSize,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30, 50, 100],
          onChange: (page, pageSize) => tablePaginationChange(page, pageSize),
        }}
      />
    </div>
  )
}
