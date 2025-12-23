✅ Correct use case
Parent re-renders often
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <HeavyList items={data} />
    </>
  );
}

Child is heavy
const HeavyList = React.memo(({ items }) => {
  console.log('Rendered');
  return items.map(item => <div key={item.id}>{item.name}</div>);
});


✅ Prevents unnecessary re-render



✅ Correct use case
Parent re-renders often
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <HeavyList items={data} />
    </>
  );
}

Child is heavy
const HeavyList = React.memo(({ items }) => {
  console.log('Rendered');
  return items.map(item => <div key={item.id}>{item.name}</div>);
});


✅ Prevents unnecessary re-render