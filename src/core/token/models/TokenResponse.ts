import type { ProfileResponse } from 'core/profile/models';

interface TokenResponse {
    token_key: string;
    refresh_token_key: string;
    expires_at: string;
    refresh_expires_at: string;
    last_active_date: string;
    user: ProfileResponse;
}

export default TokenResponse;
