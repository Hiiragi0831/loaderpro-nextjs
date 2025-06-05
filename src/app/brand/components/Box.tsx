export default function Box(data: { title: any; icon?: any; text?: string }) {
  return (
    <div className={"brand-box"}>
      {data.icon ? <div className="brand-box__icon">{data.icon}</div> : ""}
      <p
        className="brand-box__title"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      {data.text ? <p>{data.text}</p> : ""}
    </div>
  );
}
