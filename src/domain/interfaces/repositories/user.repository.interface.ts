import { User } from '../../entities/user.entity';

// We use an abstract class instead of an interface so NestJS can use it for Dependency Injection later.
export abstract class IUserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
}
