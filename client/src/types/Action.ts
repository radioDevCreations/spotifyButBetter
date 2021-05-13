import { Track } from "./Track";

export type ActionNumberPayload = { type: string; payload: number | undefined };
export type ActionStringPayload = { type: string; payload: string | undefined};
export type ActionBooleanPayload = { type: string; payload: boolean | undefined};

export type ActionArrayPayload = { type: string; payload: any[] | undefined};
export type ActionTrackPayload = { type: string; payload: Track | undefined};

