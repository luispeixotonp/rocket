import { useRouter } from "next/router";
import { createContext, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "src/components/loading/loading";
import { AuthService } from "src/service/auth/auth.service";
import { ServerService } from "src/service/server/server.service";
import { getAuth } from "src/store/auth.slice";
import { getCurrentServer, getServer } from "src/store/server.slice";

interface AuthContextData {
    isAuthenticated: () => boolean;
  }

  export const AuthContext = createContext<AuthContextData>({
    isAuthenticated: () => false,
  });

export default function AuthProvider({ children } : { children: React.ReactNode }) {
  const dispatch = useDispatch<any>();
  const router = useRouter()
  const [loading, setLoading] = useState(true);


  const loadData = () => {
    dispatch(getAuth())
    dispatch(getServer())
    dispatch(getCurrentServer())
  }

  const isAuthenticated = () => {
    loadData();
    if(ServerService.getCurrent() === null || AuthService.get() === null) {
        return false;
    } 
    
return true;
}

const redirectToLogin = async () =>  {
  
  if(!isAuthenticated()) {
    await router.push('/pages/login')
    setLoading(false)
    
    return;
  }

  if(router.pathname === '/pages/login') {
    await router.push('/')
    setLoading(false)
    
    return;
  }

  setLoading(false)
}


useLayoutEffect(() => {
  redirectToLogin()
}, [])


  return (
    <AuthContext.Provider value={{isAuthenticated }}>
      {loading ? <Loading visible /> : children}
    </AuthContext.Provider>
  );
}