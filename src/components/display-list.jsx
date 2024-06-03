const DisplayList = ({ title, items }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DisplayList;
