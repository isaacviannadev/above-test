import Container from "./components/layout";
import Navbar from "./components/navbar";

function App() {
  const handleNewEpisode = () => {
    console.log("New episode clicked");
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar onNewEpisode={handleNewEpisode} />
      <main className="py-6">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            Content test
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
