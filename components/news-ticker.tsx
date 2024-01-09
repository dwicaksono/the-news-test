const NewsTicker = ({ source }: { source: string[] }) => {
  const tickerContent = source.join(' • ');
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marqueeline">{tickerContent}</div>
    </div>
  );
};

export default NewsTicker;
