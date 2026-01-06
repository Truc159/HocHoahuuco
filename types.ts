
export enum CategoryId {
  ALKANE = 'alkane',
  ALKENE = 'alkene',
  ALKYNE = 'alkyne',
  ALCOHOL = 'alcohol',
  ALDEHYDE = 'aldehyde',
  CARBOXYLIC_ACID = 'carboxylic_acid',
  ESTER = 'ester',
  AMINO_ACID = 'amino_acid',
  AMINE = 'amine'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TopicContent {
  title: string;
  definition: string;
  iupacRules: string[];
  commonNames?: string[];
  examples: { formula: string; name: string; common?: string }[];
}

export interface Topic {
  id: CategoryId;
  name: string;
  content: TopicContent;
  questions: Question[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
