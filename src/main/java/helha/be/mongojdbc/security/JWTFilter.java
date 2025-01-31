//package helha.be.mongojdbc.security;
//
//import helha.be.mongojdbc.configuration.UserDetailsServiceConfig;
//import helha.be.mongojdbc.utils.JWTUtils;
//import io.jsonwebtoken.Claims;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//@Component
//public class JWTFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JWTUtils jwtUtils;
//
//    @Autowired
//    private UserDetailsServiceConfig userDetailsService;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        String jwt = parseJWTFromHeader(request);
//        if (jwt != null && jwtUtils.validateToken(jwt)) {
//            Claims claims = jwtUtils.parseToken(jwt);
//            String username = claims.getSubject();
//            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//            if(userDetails != null) {
//                SecurityContextHolder.getContext().setAuthentication(
//                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities())
//                );
//            }
//        }
//        filterChain.doFilter(request, response);
//    }
//
//    private String parseJWTFromHeader(HttpServletRequest request) {
//        String authorization = request.getHeader("Authorization");
//        if(authorization != null && authorization.startsWith("Bearer ")) {
//            return authorization.substring(7);
//        }
//        return null;
//    }
//}
