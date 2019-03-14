export default function (name, field) {
    return `
<Panel header={<div onClick={this.onClickPanel('${field}')} >${name}</div>} key="${field}">
    {getFieldDecorator('${field}', {
        initialValue: this.props.${field}
    })(
        <Radio.Group>
        </Radio.Group>
    )}
</Panel>`
}
