# React 16.9使用规范
> 为了更好地学习、使用React 16.9，现将平时开发中遇到的一些规范（有些是草案）稍作记录，清点如下：

[[toc]]

## 编写stateless component的写法
```js
// ------good------
// 好处：function会变量提升，可提前访问
const RateQuestComponent = forwardRef(RateQuest);

function RateQuestItem(props) {
    const {
        form: { getFieldDecorator }
    } = props;

    return (
        <FormItem label={questNum}>
            {getFieldDecorator('name', {})(<RateQuestComponent {...props} />)}
        </FormItem>
    );
}

function RateQuest(props, ref) {
    const { value = {}, answerItemList } = props;

    return <Rate value={value.optId} onChange={props.onChange} />;
}

// 好处：export写在结尾，清晰知道即将导出的组件内容
export default RateQuestItem;
```