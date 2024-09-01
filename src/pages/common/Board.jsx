import BoardComponent from "../../components/Droppable";
import Sidebar from "../../components/sidebar/sidebar";
import PageHeader from "../../components/PageHeader";

export default function Board() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <PageHeader />
      <div className="flex h-full w-full flex-row gap-0">
        <Sidebar collapse={true} active={"tasks"} />
        <div className="h-full w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12 pb-0">
          <h1 className="max-w-[700px] text-4xl font-semibold">
            Maintance Work
          </h1>
          <BoardComponent />
        </div>
      </div>
    </main>
  );
}
