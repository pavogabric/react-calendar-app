export interface Calendar {
    kind: string;
    etag: any;
    id: string;
    summary: string;
    description: string;
    location: string;
    timeZone: string;
    summaryOverride: string;
    colorId: string;
    backgroundColor: string;
    foregroundColor: string;
    hidden: boolean;
    selected: boolean;
    accessRole: string;
    defaultReminders: [
        {
            method: string;
            minutes: number;
        }
    ];
    notificationSettings: {
        notifications: [
            {
                type: string;
                method: string;
            }
        ];
    };
    primary: boolean;
    deleted: boolean;
    conferenceProperties: {
        allowedConferenceSolutionTypes: string[];
    };
}

export interface CalendarListResponse {
    etag: string;
    items: Calendar[];
    kind: string;
    nextSyncToken: string;
}
