import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiOperation({description:'To add a new task wrt to user', summary: 'Add a new a new task'}) 
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail()
  userEmail: string) {
    return this.todoService.create(createTodoDto, userEmail );
  }
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiOperation({description:'To get all user tasks', summary: 'to get all user tasks'}) 

  @Get()
  async findAll(@UserEmail()
userEmail: string) {
    return this.todoService.findAll(userEmail);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To get a specific user task', summary: 'To get a specific user task'}) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To update a specific user task', summary: 'To update a specific user task'}) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To delete a specific user task', summary: 'To delete a specific user task'}) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
