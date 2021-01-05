import "./App.css";
import CheckboxesTags from "./CheckboxesTags";
import DenseAppBar from "./DenseAppBar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <Container maxWidth="sm">
        <Box m={2} p={3} style={{ width: "500px", marginTop: "50px" }}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            <CheckboxesTags />
          </Paper>
        </Box>
      </Container>
      <footer>
        This is just a Prediction and we highly recommend you to consult a
        Doctor.
      </footer>
    </div>
  );
}

export default App;
