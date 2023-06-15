```html
<div class="paragraph">
    <p>Hallo Welt</p>
</div>
```

```css
.paragraph
{
    color: red;
}
```

```jsx
<Paragraph>
    <p>
        Hallo Welt
    </p>
</Paragraph>
```

```jsx
<Paragraph>
    unsere children...
</Paragraph>
```

```css
.Paragraph
{
    color: red;
}
```

```jsx
const Paragraph = (props) =>
{
    return(
        <div className="Paragraph">
            { props.children }
            { props.irgendwas }
        </div>
    )
}
```

```jsx
<Paragraph color={"red"}>
    <p>...</p>
</Paragraph>
```

```jsx
const Paragraph = ({ children, color, isValid }) => {

    return(
        <div className="Paragraph">
            { children }
            { isValid }
        </div>
    )
}
```