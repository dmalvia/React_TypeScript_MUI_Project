// Components
import {
  Alert,
  AlertTitle,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  InputBase,
  InputAdornment,
  Radio,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import Add from "@mui/icons-material/Add";

/* Layout
     ------ */
export const _Box = () => <Box />;

export const _Container = () => <Container />;

export const _Grid = () => (
  <Grid container>
    <Grid item />
    <Grid item />
  </Grid>
);

export const _Stack = () => <Stack />;

export const _ImageList = () => (
  <ImageList>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
        srcSet="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
        alt="Breakfast"
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
        srcSet="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
        alt="Burger"
        loading="lazy"
      />
    </ImageListItem>
  </ImageList>
);

/* Inputs
     ------ */

export const _Autocomplete = () => (
  <Autocomplete
    id="free-solo-demo"
    freeSolo
    options={["One", "Two", "Three"]}
    renderInput={(params) => (
      <TextField
        {...params}
        label="enter text"
        margin="normal"
        variant="outlined"
        sx={{ backgroundColor: "white" }}
      />
    )}
  />
);

export const _Button = () => <Button>Button</Button>;

export const _ButtonGroup = () => (
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);

export const _Checkbox = () => <Checkbox />;

/* Disabled because Checkbox is not imported
  export const _Checkbox_with_label = () => (
    <FormControlLabel control={<Checkbox />} label="Checkbox" />
  )
  */

export const _Radio = () => <Radio />;

/* Disabled because Radio is not imported
  export const _Radio_with_label = () => (
    <FormControlLabel control={<Radio />} label="Radio" />
  )
  */

export const _Fab = () => (
  <Fab color="primary" aria-label="add">
    <Add />
  </Fab>
);

export const _Rating = () => {
  return <Rating value={3} />;
};

export const _Select = () => (
  <FormControl fullWidth>
    <InputLabel id="select-label">Select</InputLabel>
    <Select labelId="select-label" value={1} label="Select">
      <MenuItem value={1}>One</MenuItem>
      <MenuItem value={2}>Two</MenuItem>
      <MenuItem value={3}>Three</MenuItem>
    </Select>
  </FormControl>
);

export const _Slider = () => <Slider />;

export const _Switch = () => <Switch />;

export const _TextField = () => {
  return <TextField label="Text Field" />;
};

export const _ToggleButton = () => (
  <ToggleButton value={1}>Button</ToggleButton>
);

export const _ToggleButtonGroup = () => (
  <ToggleButtonGroup color="primary" exclusive>
    <ToggleButton value={1}>One</ToggleButton>
    <ToggleButton value={2}>Two</ToggleButton>
    <ToggleButton value={3}>Three</ToggleButton>
  </ToggleButtonGroup>
);

// Display Data

export const _Avatar = () => <Avatar>Aa</Avatar>;

export const _Avatar_image = () => (
  <Avatar alt="Jay Doe" src="https://randomuser.me/api/portraits/lego/5.jpg" />
);

export const _Badge = () => (
  <Badge color="secondary" badgeContent={1}>
    <Box
      component="span"
      sx={{ width: 30, height: 30, background: "gray" }}
    ></Box>
  </Badge>
);

export const _Chip = () => <Chip label="Chip" />;

export const _Divider = () => <Divider />;

export const _List = () => (
  <List>
    <ListItem>One</ListItem>
    <ListItem>Two</ListItem>
    <ListItem>Three</ListItem>
  </List>
);

export const _Tooltip = () => (
  <Tooltip title="Tooltip">
    <Box />
  </Tooltip>
);

export const _Typography = () => <Typography>Text</Typography>;
export const _Typography_heading = () => (
  <Typography variant="h1">Heading</Typography>
);
export const _Typography_subtitle = () => (
  <Typography variant="subtitle1">Subtitle</Typography>
);
export const _Typography_body = () => (
  <Typography variant="body1">Body</Typography>
);

/* Feedback
     -------- */

export const _Alert = () => <Alert severity="warning">Alert</Alert>;

export const _Alert_with_title = () => (
  <Alert severity="warning">
    <AlertTitle>Title</AlertTitle>
    Description
  </Alert>
);

export const _Backdrop = () => <Backdrop open />;

export const _Dialog = () => (
  <Dialog
    open={false}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Title</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Description
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>Disagree</Button>
      <Button autoFocus>Agree</Button>
    </DialogActions>
  </Dialog>
);
export const _Paper = () => <Paper />;
export const _InputBase = () => <InputBase />;
export const _InputAdornment = () => <InputAdornment />;
