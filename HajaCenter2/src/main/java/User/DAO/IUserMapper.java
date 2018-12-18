package User.DAO;

import Annotation.Query;
import User.DTO.User;

@Query
public interface IUserMapper {
	
	int join(User user);
	User selectUserById(String id);
	User selectUserByUserId(int userId);
	int updateUser(User user);
}
