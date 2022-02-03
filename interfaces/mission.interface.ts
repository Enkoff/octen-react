export interface IMissionInterface {
    mission_name: string;
    launch_date_local: string;
    launch_site: IMissionLaunchSite;
    rocket: IMissionRocket;
}

interface IMissionLaunchSite {
    site_name_long: string;
    links: ILaunchSiteLinks,
}

interface ILaunchSiteLinks {
    article_link: null | string;
    video_link: string;
}

interface IMissionRocket {
    rocket_name: string;
    first_stage: IRocketFirstStage,
    second_stage: IRocketSecondStage
}

interface IRocketFirstStage {
    cores: [
        {
            flight: number;
            core: IFirstStageCore
        }
    ];
}

interface IFirstStageCore {
    reuse_count: number;
    status: string;
}

interface IRocketSecondStage {
    payloads: [
        {
            payload_type: string;
            payload_mass_kg: number;
            payload_mass_lbs: number;
        }
    ]
}