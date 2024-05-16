# Multi-Select Autocomplete Component with Next.js

## Overview
This project implements a multi-select autocomplete component using Next.js, React.js, TypeScript, and Material-UI. The component allows users to search and select characters from the "Rick and Morty" API.

## Live Demo
https://rick-and-morty-mu-six.vercel.app/

## Requirements
- Implement a multi-select autocomplete component compatible with the provided design.
- Utilize Next.js, React.js, TypeScript, and Material-UI.
- Implement autocomplete functionality by querying the API based on the input text.
- Display character images, names, and the number of episodes they appeared in for each search result.
- Highlight the query text in the displayed results.
- Allow selecting and deselecting characters from the results.
- Support keyboard navigation using arrow keys and tab for all actions, including navigating through selected items in the input field and the result list, as well as selecting and deselecting items.

## Specifications
- **Framework**: Next.js
- **Language**: TypeScript
- **UI Components**: Material-UI, including Autocomplete

## State Management
- **Redux**: Use Redux for managing application state.
- **Reducers**: Implement reducers to manage state changes related to character selection.

## Data access
- **Saga**: Utilize Redux Saga for handling asynchronous actions.

## Folder Structure
- `src/app`: Contains the React pages and components.
- `src/serviceConnectors`: Contains API service functions for querying the Rick and Morty API.
- `src/store`: Contains Redux store with reducers and saga middleware.
- `src/types`: Contains types.
- `src/utils`: Contains utilities such as themes.

## Example Usage
```tsx
import PageContainer from "../components/PageContainer";
import { Box, Grid } from "@mui/material";
import SearchBox from "../components/SearchBox";
import styles from "../components/styles.module.scss";

function App() {
  return (
    <PageContainer>
      <Box>
        <Grid container >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3, p: 1 }}>
            <SearchBox />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default App;
