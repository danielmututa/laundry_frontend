import { getAuthCookie } from '@/lib/cookies';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from './userContext/userStore';
import axios from 'axios';
import { apiClient } from './axios';
import Loader from '@/components/common/Loader';
import { toast } from 'react-toastify';

type Props = {
    children: React.ReactNode;
};

function ProtectedRouteProvider({ children }: Props) {
    const { userId, setUser, userProfile, setProfile } = useUserStore();
    const userAuth = getAuthCookie();
    const [loading, setLoading] = useState<boolean>(false);



    useEffect(() => {

        if (userAuth?.isValid && userId !== userAuth.userId) {
            setUser(userAuth.userId);
        }
    }, [userAuth, userId, setUser]);


    useEffect(() => {

        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get(`user_profile?user_id=${userId}`);
                setProfile(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    toast(error.response?.data.status);
                }
            } finally {
                setLoading(false);
            }
        }

        if (userAuth?.isValid && !userProfile) {
            fetchUser();
        }
    }, [
        userAuth,
        userId,
        setProfile,
        userProfile
    ]);

    if (loading) {
        return <Loader />
    }

    if (!userAuth?.isValid) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}

export default ProtectedRouteProvider;