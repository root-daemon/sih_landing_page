
const colors = ["#A36464", "#578C56", "#6FA1C5", "#A46FC5"]

export default function Man({ name, task, index }) {
  return (
    <div className="flex z-10 gap-4 my-2">
      <div style={{background: colors[index] }} className="h-12 w-12 rounded-full flex text-white font-semibold text-xl items-center justify-center">{name[0]}</div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm font-medium opacity-60">{task}</p>
      </div>
    </div>
  );
}
