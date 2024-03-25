import { getCharactersAction, resetCharactersAction } from "@/store/actionCreators/character";
import { IRootState } from "@/store/reducers";
import { Character } from "@/types/character";
import { Result } from "@/types/result";
import { Autocomplete, Box, Checkbox, Stack, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatcher = useDispatch();
  const characters: Result<Character> | null = useSelector((store: IRootState) => store.character.characters);
  const [characterData, SetCharacterData] = useState<Array<any>>([]);
  const [inputValue, SetInputValue] = useState<string>("");
  const [selectedValues, SetSelectedValues] = useState<Array<any>>([]);

  useEffect(() => {
    return () => {
      dispatcher(resetCharactersAction())
    }
  }, []);

  useEffect(() => {
    if (characters) {
      const data = !!characters.results
        ? characters.results?.map(result => {
          return {
            id: result.id,
            name: result.name,
            image: result.image,
            episodeCount: result.episode?.length
          }
        })
        : [];
      SetCharacterData(data)
    }
  }, [characters]);

  const resetCharacterData = () => {
    SetCharacterData([]);
  }

  const onInputChange = (event: SyntheticEvent<Element, Event>, value: string) => {
    if (!value) {
      resetCharacterData();
      return;
    };

    SetInputValue(value);
    const filter = `name=${value}`
    dispatcher(getCharactersAction(filter))
  }

  const onChange = (event: SyntheticEvent<Element, Event>, value: any[]) => {
    SetSelectedValues(value)
  }

  const getNameText = (fieldValue: string) => {
    const inputValueLower: string = inputValue.toLowerCase();
    const fieldValueLower: string = fieldValue.toLowerCase();
    const indexToSplit: number = fieldValueLower.indexOf(inputValueLower);

    const left = fieldValue.slice(0, indexToSplit);
    const bold = fieldValue.slice(indexToSplit, indexToSplit + inputValue.length);
    const right = fieldValue.slice(indexToSplit + inputValue.length);
    return (
      <span>
        <span>{left}</span>
        <b>{bold}</b>
        <span>{right}</span>
      </span>
    )
  }

  return (
    <Autocomplete
      multiple
      sx={{ width: "400px" }}
      onInputChange={onInputChange}
      onChange={onChange}
      options={characterData}
      value={selectedValues}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Characters"
          autoComplete="off"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
      renderOption={(props, option, { selected }) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0, borderRadius: "15px" } }}
          {...props}
        >
          <Checkbox checked={selected} />
          <img
            loading="lazy"
            width="60px"
            src={option.image}
          />
          <Stack>
            {getNameText(option.name)}
            <span>{`${option.episodeCount} episodes`}</span>
          </Stack>
        </Box>
      )}
    />
  )
}

export default SearchBox;