import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === "string" ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError("Failed to generate email reply. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          AI Email Reply Assistant
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Paste the email content:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            placeholder="Enter email content here..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Select Tone</InputLabel>
            <Select
              value={tone}
              label="Select Tone"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Paper elevation={2} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Suggested Reply:
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              value={generatedReply}
              inputProps={{ readOnly: true }}
            />

            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy Reply
            </Button>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}

export default App; 