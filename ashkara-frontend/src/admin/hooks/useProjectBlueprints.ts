import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectBlueprintsApi } from "../services/adminApi";

export const useProjectBlueprints = (params?: any) => {
  return useQuery({
    queryKey: ["projectBlueprints", params],
    queryFn: async () => {
      const { data } = await projectBlueprintsApi.getAll(params);
      return data;
    },
  });
};

export const useProjectBlueprint = (id: string) => {
  return useQuery({
    queryKey: ["projectBlueprints", id],
    queryFn: async () => {
      if (!id) return null;
      const { data } = await projectBlueprintsApi.getById(id);
      return data;
    },
    enabled: !!id,
  });
};

export const useCreateProjectBlueprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await projectBlueprintsApi.create(data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectBlueprints"] });
    },
  });
};

export const useUpdateProjectBlueprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const res = await projectBlueprintsApi.update(id, data);
      return res.data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["projectBlueprints"] });
      queryClient.invalidateQueries({ queryKey: ["projectBlueprints", variables.id] });
    },
  });
};

export const useDeleteProjectBlueprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await projectBlueprintsApi.delete(id);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectBlueprints"] });
    },
  });
};
