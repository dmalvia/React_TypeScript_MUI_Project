export function fragment$fragment() {
  return <></>;
}

export function div$html() {
  return <div />;
}

export function text$text() {
  return <div>Sample text</div>;
}

export function text_span$text() {
  return <span>Sample text</span>;
}

export function h1$html() {
  return <h1>Heading 1</h1>;
}

export function h2$html() {
  return <h2>Heading 2</h2>;
}

export function h3$html() {
  return <h3>Heading 3</h3>;
}

export function h4$html() {
  return <h4>Heading 4</h4>;
}

export function h5$html() {
  return <h5>Heading 5</h5>;
}

export function h6$html() {
  return <h6>Heading 6</h6>;
}

export function img$html() {
  return <img src="https://picsum.photos/200/300" />;
}

export function Basic_Row() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
    </div>
  );
}

export function Basic_Column() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
      <div style={{ width: "100px", height: "100px", backgroundColor: "#888" }} />
    </div>
  );
}
