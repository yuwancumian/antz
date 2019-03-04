const columns = [
    {
        title: '商品名称',
        dataIndex: 'productName', 
        width: '120px', 
    },
    {
        title: '规格型号',
        dataIndex: 'productModel', 
        width: '120px', 
    },
    {
        title: '计量单位',
        dataIndex: 'productUnit',
        width: '120px', 
    },
    {
        title: '采购数量',
        dataIndex: 'productNum', 
        width: '120px'
    },
    {
        title: '商品要求',
        dataIndex: 'procuctNote', 
        width: '120px'
    }
];

return (
    <Table
        columns={this.columns}
        dataSource={dataSource}
        rowKey="index"
        loading={true}
        pagination={false}
    />
)

