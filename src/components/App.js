import { useAuth } from "hooks";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'))
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));
const ErrorPage = lazy(() => import('../pages/Error'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (isRefreshing ? <p>Refreshing user...</p> : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<PhonebookPage />} />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  ))
};
