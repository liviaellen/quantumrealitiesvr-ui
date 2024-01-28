import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { BaseDialog } from "components/base-dialog";
import { FC, ReactNode } from "react";
import WebIcon from "@mui/icons-material/Web";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

interface GitHubLinkProps {
  name: string;
  description: string;
  icon: ReactNode;
  url: string;
}

const GitHubLink: FC<GitHubLinkProps> = ({ name, description, icon, url }) => (
  <ListItem disablePadding>
    <ListItemButton href={url} target="_blank" rel="noopen noreferer">
      <ListItemAvatar>{icon}</ListItemAvatar>
      <ListItemText primary={name} secondary={description} />
    </ListItemButton>
  </ListItem>
);

export interface GitHubLinksProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubLinks: FC<GitHubLinksProps> = ({ isOpen, onClose }) => (
  <BaseDialog
    title="Github Projects"
    closeText="Close"
    isOpen={isOpen}
    onClose={onClose}
  >
    <List disablePadding>
      <GitHubLink
        name="DevPost"
        description="Read about about the project, model development and api"
        icon={<ModelTrainingIcon />}
        url="https://devpost.com/software/gesture-vr"
      />
      <GitHubLink
        name="API Endpoint"
        description="View the docs for the API, built with FastAPI"
        icon={<WebIcon />}
        url="https://slvr-4zunylksjq-uc.a.run.app/docs"
      />
    </List>
  </BaseDialog>
);
