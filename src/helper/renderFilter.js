function toInput (name,field) {
    return `
<Panel header={<div onClick={this.onClickPanel('${field}')} >${name}</div>} key="${field}">
    {getFieldDecorator('${field}', {
        initialValue: filter.get('${field}')
    })(
        <Input type="text" />
    )}
</Panel>`}

function toRadio (name, filed) {
    return `
<Panel header={<div onClick={this.onClickPanel('createInquiryState')} >是否生成询价记录</div>} key="createInquiryState">
    {getFieldDecorator('createInquiryState', {
        initialValue: this.props.createInquiryState
    })(
        <Radio.Group>
            <Radio value={2}>是</Radio>
            <Radio value={1}>否</Radio>
        </Radio.Group>
    )}
</Panel>`}

function toSelect (){

}

function toRange(o){

}

export {
    toInput,
    toRadio,
    toSelect,
    toRange
}
