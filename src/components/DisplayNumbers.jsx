const DisplayNumbers = ({ items }) => {
  return (
    <div>
      <div>Numbers</div>
      <div>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DisplayNumbers;
