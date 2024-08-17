export interface IImage {
    id: string;
    slug: string;
    alternative_slugs: AlternativeSlugs;
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
    alt_description: string | null;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: unknown[];
    sponsorship: string | null;
    topic_submissions: TopicSubmissions;
    asset_type: string;
    user: User;
    tags: Tag[];
}

export interface AlternativeSlugs {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
    photos?: string;
    likes?: string;
    portfolio?: string;
    following?: string;
    followers?: string;
}

export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: Links;
    profile_image: ProfileImage;
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos?: number;
    total_illustrations?: number;
    total_promoted_illustrations?: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface Social {
    instagram_username: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
    paypal_email: string | null;
}

export interface Tag {
    type: string;
    title: string;
    source: Source;
}

export interface Source {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: CoverPhoto;
}

export interface Ancestry {
    type: Type;
    category: Category;
    subcategory?: Subcategory;
}

export interface Type {
    slug: string;
    pretty_slug: string;
}

export interface Category {
    slug: string;
    pretty_slug: string;
}

export interface Subcategory {
    slug: string;
    pretty_slug: string;
}

export interface CoverPhoto {
    id: string;
    slug: string;
    alternative_slugs: AlternativeSlugs;
    created_at: string;
    updated_at: string;
    promoted_at?: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string | null;
    alt_description: string;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: unknown[];
    sponsorship: string | null;
    topic_submissions: TopicSubmissions;
    asset_type: string;
    premium: boolean;
    plus: boolean;
    user: User;
}

export interface TopicSubmissions {
    animals?: Animals | null;
    "textures-patterns"?: TexturesPatterns | null;
    wallpapers?: Wallpapers | null;
}

export interface Animals {
    status: string;
    approved_on?: string | null;
}

export interface TexturesPatterns {
    status: string;
    approved_on?: string | null;
}

export interface Wallpapers {
    status: string;
    approved_on?: string | null;
}

export interface Breadcrumb {
    slug: string;
    title: string;
    index: number;
    type: string;
}
